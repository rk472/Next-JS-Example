import { Card, CardHeader,Avatar, Typography } from "@material-ui/core";


export default function UserCard(){
    return (
        <Card style={{
            marginBottom: 10
        }}>
            <CardHeader 
                avatar= {
                    <Avatar style={{
                        backgroundColor: 'red'
                    }}>
                        R
                    </Avatar>
                }
                title={
                    <Typography style={{
                        fontSize: 18,
                        fontWeight: 600
                    }}>
                        {'John Doe'}
                    </Typography>
                }
                subheader={
                    <Typography style={{
                        fontSize: 16
                    }}>
                        {'john@gmail.com'}
                    </Typography>
                }
                // action={
                //     <IconButton onClick={(event)=>{setAnchorElement(event.currentTarget);}}>
                //         <MenuIcon />
                //     </IconButton>
                // }
            />
        </Card>
    );
}