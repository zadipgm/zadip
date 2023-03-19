import { NextResponse } from 'next/server'
export function middleware(request) {

    let cookie = request.cookies.get('isLogedIn')?.value
    const urld = request.nextUrl.clone()
    if (urld.pathname = '/login') {
        console.log("here", cookie)
        if (cookie === undefined) {
            const url = request.nextUrl.clone()
            url.pathname = '/login'
            return NextResponse.rewrite(url)
        } else if (cookie === 'true') {
            const url = request.nextUrl.clone()
            url.pathname = '/dashboard'
            return NextResponse.rewrite(url)

        }
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/dashboard'],
};