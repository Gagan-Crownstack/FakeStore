import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const isLoggedIn: boolean =false

export function middleware(request: NextRequest) {
    if(!isLoggedIn && request.url === "http://localhost:3000/cart"){
        return NextResponse.redirect(new URL("/",request.url))
    }
    return NextResponse.next();
}

// export const config = {
//     matcher: '/:path*/:product*',  
//   };
  
