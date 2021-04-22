import {makeStyles} from '@material-ui/styles';

const useStyle = makeStyles(() => ({
    container: {
        // width: "100%",
        minHeight: "100vh",
        backgroundColor: " #FFFFFF 0% 0% no-repeat padding-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        maxWidth :"60%",
        minHeight: "600px",
        background: "#EBEBEB 0% 0% no-repeat padding-box",
        padding: "3%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // alignItems: "center"

    },
    title: {
        color: "#737373",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "400",
        marginBottom: "0",
        ['@media (max-width: 550px)']: {
            fontSize: "18px"
        }
    },
    names: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2%",
        ['@media (max-width: 550px)']: {
            flexDirection: "column"
        }

    },
    email: {
        minWidth: "100%",
        marginTop: "2%",
    },
    company: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2%",
        ['@media (max-width: 550px)']: {
            flexDirection: "column"
        }
    },
    field: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2%",
        ['@media (max-width: 550px)']: {
            flexDirection: "column"
        }
    },
    first: {
        marginRight: "2%",
        flexBasis: "50%",
        ['@media (max-width: 550px)']: {
            marginBottom: "3%",
            width:"100%"
        }
    },
    second: {
        flexBasis: "50%",
        ['@media (max-width: 550px)']: {
            marginBottom: "2%"
        }
    },
    button: {
        background: "#0380A7 0% 0% no-repeat padding-box",
        borderRadius: "50px",
        padding: "3%",
        color: "white",
        fontSize: "20px",
        ['@media (max-width: 550px)']: {
            padding: "2% 5%",
            fontSize: "18px",
            margin: "3%"
        },
        '&:hover': {
            background: "#344ceb"
        }
    },
    input: {
        backgroundColor: "white"
    }
  
}))

export default useStyle;