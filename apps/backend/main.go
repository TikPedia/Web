package main

import (
	"log"
	"net/http"
	"os"

	"github.com/clerk/clerk-sdk-go/clerk"
	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func globalHandler(client clerk.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
 
		sessClaims, ok := ctx.Value(clerk.ActiveSessionClaims).(*clerk.SessionClaims)
		if !ok {
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Unauthorized"))
			return
		}
 
		user, err := client.Users().Read(sessClaims.Subject)
		if err != nil {
			panic(err)
		}
 
		w.Write([]byte("Welcome " + *user.FirstName))
	}
}

func clerkMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
    return func(c echo.Context) error {
        // eg. inspect some header value before processing the request
        header := c.Request().Header.Get("Some-Header")
        if header == "" {
            return apis.NewBadRequestError("Invalid request", nil)
        }

        return next(c) // proceed with the request chain
    }
}

func main() {

    client, _ := clerk.NewClient('')
    injectActiveSession := clerk.WithSession(client)

    app := pocketbase.New()

    // serves static files from the provided public dir (if exists)
    app.OnBeforeServe().Add(func(e *core.ServeEvent) error {
        e.Router.Use(clerkMiddleware())
        e.Router.GET("/*", apis.StaticDirectoryHandler(os.DirFS("./pb_public"), false))
        return nil
    })

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
