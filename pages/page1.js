import {Container, Card, CardHeader, Avatar, CardContent, Typography, CardActions, IconButton, CardMedia} from '@material-ui/core';
import LikeIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/EditTwoTone';

function Page1(){
  return (
      <Container maxWidth="md">
        <Card>
            <CardHeader 
            avatar={
                <Avatar>
                    R
                </Avatar>
            }
            title="Rice Bowl"
            subheader="April 8, 2020"
             />
             <CardContent >
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                </Typography>
                <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
             </CardContent>
             <CardMedia 
                style={{height: 250, marginRight: 10, marginLeft: 10}}
                title="Demo"
                image="/rice.jpg"
             />
             <CardActions>
                 <IconButton>
                    <LikeIcon />
                 </IconButton>
                 <IconButton>
                    <EditIcon />
                 </IconButton>
             </CardActions>
        </Card>
      </Container>
  );
}
export default Page1
