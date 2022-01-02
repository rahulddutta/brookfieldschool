import { makeStyles } from "@material-ui/core"
import "./Footer.css"

const useStyles = makeStyles((theme)=> ({
    footer: {
        backgroundColor:"#fff",
        color:"black",
        height:50,
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
}))
export default function Footer() {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <div className="text">Developed by <span><a href="https://twitter.com/duttadrahul" target="_blank" rel="noopener noreferrer">Rahul dutta</a></span></div>
        </div>
    )
}
