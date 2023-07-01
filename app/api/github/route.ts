import { NextResponse } from 'next/server';



// get all projects from organization from Github api and return them as json response

async function getProjects() {
    const response = await fetch('https://api.github.com/orgs/TikPedia/repos');
    const data = await response.json();
    return data;
}


export async function GET() {
    return NextResponse.json(await getProjects());
}
