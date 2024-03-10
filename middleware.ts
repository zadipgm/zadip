import { NextResponse } from 'next/server'
export function middleware(request) {

    let cookie = request.cookies.get('token')?.value
    const urld = request.nextUrl.clone()
    console.log(cookie, "token", cookie != '')
    if (urld.pathname = '/login/') {
        if (cookie === '' || cookie === undefined) {
            const url = request.nextUrl.clone()
            url.pathname = '/login/'
            return NextResponse.redirect(url)
        } else if (cookie != '' || cookie != undefined) {
            const url = request.nextUrl.clone()
            url.pathname = urld.pathname
            return NextResponse.next(url)

        }
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/dashboard/', '/dashboard/certificate/', '/dashboard/certificate/generate/', '/dashboard/all_users/', '/dashboard/users/', '/dashboard/head_tag/']
}