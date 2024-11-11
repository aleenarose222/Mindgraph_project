import { Card,CardContent } from "@mui/material"
import { useEffect, useState } from "react"

const Paragraph =({check})=>{
    const [data,setData] = useState("");
    useEffect(()=>{
        setData(data)
    },[check])
    return<Card>
        <CardContent>
            {data}
        </CardContent>
    </Card>
}

export default Paragraph;