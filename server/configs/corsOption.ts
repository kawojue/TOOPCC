import { CorsOptions } from "cors"

export const allowedOrigins: string[] =  [
    "http://localhost:3000",
    "https://toopcc.vercel.app",
]

const corsOption: CorsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin as string) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS!"))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
}

export default corsOption