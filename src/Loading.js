import { CircularProgress } from "@material-ui/core";

export default function LoadingCustom() {
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 30,
            width: '100%',
            height: '-webkit-fill-available'
        }}>
            <CircularProgress />
        </div>  
    );
};