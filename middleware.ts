import { NextResponse } from 'next/server'
export function middleware(request) {

    let cookie = request.cookies.get('isLogedIn')?.value
    const urld = request.nextUrl.clone()
    console.log("here is path", urld.pathname)
    if (urld.pathname = '/login/') {
        if (cookie === undefined) {
            const url = request.nextUrl.clone()
            url.pathname = '/login/'
            return NextResponse.redirect(url)
        } else if (cookie === 'true') {
            const url = request.nextUrl.clone()
            url.pathname = '/ar/dashboard'
            return NextResponse.rewrite(url)

        }
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/ar/dashboard', "/dashboard/all_users/", "/dashboard/head_tag/"]
}