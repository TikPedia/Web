import { NextResponse } from 'next/server';


interface Project {
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    languages_url: string;
    languages: {
        [key: string]: number;
    },
    updated_at: string;
    stargazers_count: number;
}


async function getProjects() {
    const response = await fetch('https://api.github.com/orgs/TikPedia/repos', { next: { revalidate: 3600 } });
    const data = await response.json();

    const projects: Project[] = [];


    // for each project, get the languages used and add them to the project object
    for (let i = 0; i < data.length; i++) {

        const project = {} as Project;

        const response = await fetch(data[i].languages_url, { next: { revalidate: 3600 } });
        const languages = await response.json();

        project.name = data[i].name;
        project.description = data[i].description;
        project.html_url = data[i].html_url;
        project.homepage = data[i].homepage;
        project.languages_url = data[i].languages_url;
        project.languages = languages;
        project.updated_at = data[i].updated_at;
        project.stargazers_count = data[i].stargazers_count;
        projects.push(project);

    }

    return projects;
}


export async function GET() {
    return NextResponse.json(await getProjects());
}
