import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Label} from "@/components/label";


interface TrendsItem {
    name: string;
    state: string;
}

const data = [
    { name : "Football", state : ""},
    { name : "OlympicGames", state : ""},
    { name : "Esport", state : ""},
    { name : "Github", state : ""},
]



export default function TrendsPage() {
    return (
        <div>
            <h1>Trends Page</h1>

          <div className={"flex space-x-4"}>
              <div>
                  <Card>
                      <CardHeader className="pb-3">
                          <CardTitle>Current Trends</CardTitle>
                          <CardDescription>
                              Choose a trend
                          </CardDescription>
                          <Separator className="my-4" />
                      </CardHeader>
                      <CardContent className="grid gap-1">
                          {
                              data.map((item) => {
                                  return (
                                      <div className="flex items-center justify-between space-x-4 -mx-2 rounded-md p-4 transition-all hover:bg-accent hover:text-accent-foreground" key={item.name}>
                                          <div className="space-y-1">
                                              <p className="text-sm font-medium leading-none">{item.name}</p>
                                          </div>
                                          <Button>Submit</Button>
                                      </div>
                                  )
                              })
                          }
                      </CardContent>
                  </Card>
              </div>
              <div>
                  <Card>
                      <CardHeader>
                          <CardTitle>Cookie Settings</CardTitle>
                          <CardDescription>Manage your cookie settings here.</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-6">
                          <div className="flex items-center justify-between space-x-2">
                              <Label htmlFor="necessary" className="flex flex-col space-y-1">
                                  <span>Strictly Necessary</span>
                                  <span className="font-normal leading-snug text-muted-foreground">
              These cookies are essential in order to use the website and use
              its features.
            </span>
                              </Label>
                          </div>
                          <div className="flex items-center justify-between space-x-2">
                              <Label htmlFor="functional" className="flex flex-col space-y-1">
                                  <span>Functional Cookies</span>
                                  <span className="font-normal leading-snug text-muted-foreground">
              These cookies allow the website to provide personalized
              functionality.
            </span>
                              </Label>

                          </div>
                          <div className="flex items-center justify-between space-x-2">
                              <Label htmlFor="performance" className="flex flex-col space-y-1">
                                  <span>Performance Cookies</span>
                                  <span className="font-normal leading-snug text-muted-foreground">
              These cookies help to improve the performance of the website.
            </span>
                              </Label>
                          </div>
                      </CardContent>
                      <CardFooter>
                          <Button variant="outline" className="w-full">
                              Save preferences
                          </Button>
                      </CardFooter>
                  </Card>
              </div>
          </div>

        </div>
    )
}
