'use client';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import pb from '../lib/pocketbase';
import type { AuthProviderInfo } from 'pocketbase';

export interface PbUser {
  id: string;
  name: string;
  email: string;
  username: string;
  avatarUrl: string;
}

interface AuthContextType {
  user: PbUser | null;
  googleSignIn: () => void;
  githubSignIn: () => void;
  setUserData: (user: any) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState<PbUser | null>(null);
  const [googleAuthProvider, setGoogleAuthProvider] =
    useState<AuthProviderInfo | null>(null);
  const [githubAuthProvider, setGithubAuthProvider] =
    useState<AuthProviderInfo | null>(null);

  useEffect(() => {
    const initAuth = async () => {
      const authMethods = await pb
        .collection('users')
        .listAuthMethods()
        .then((methods) => methods)
        .catch((err) => {
          console.error(err);
        });

      if (authMethods)
        for (const provider of authMethods.authProviders) {
          if (provider.name === 'google') setGoogleAuthProvider(provider);
          if (provider.name === 'github') setGithubAuthProvider(provider);
        }
    };

    initAuth();

    if (pb.authStore.model) {
      setUserData(pb.authStore.model);
    }
  }, []);

  const setUserData = (pbUser: any) => {
    const { id, name, email, username, avatar } = pbUser;
    console.log('set user data');
    const toAdd = {
      id,
      name,
      email,
      username,
      avatarUrl: `${process.env.NEXT_PUBLIC_PB_URL}/api/files/users/${id}/${avatar}?thumb=100x300`,
    };
    console.log(toAdd);
    setUser(toAdd);
  };

  const googleSignIn = () => {
    console.log('googleSignIn');
    signOut();
    localStorage.setItem('provider', JSON.stringify(googleAuthProvider));
    const redirectUrl = `${location.origin}/signin`;
    const url = googleAuthProvider?.authUrl + redirectUrl;

    router.push(url);
  };

  const githubSignIn = () => {
    signOut();
    localStorage.setItem('provider', JSON.stringify(githubAuthProvider));
    const redirectUrl = `${location.origin}/signin`;
    const url = githubAuthProvider?.authUrl + redirectUrl;

    router.push(url);
  };

  const signOut = () => {
    setUser(null);
    pb.authStore.clear();
  };

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, githubSignIn, setUserData, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const usePbAuth = () => useContext(AuthContext) as AuthContextType;
export default AuthWrapper;
