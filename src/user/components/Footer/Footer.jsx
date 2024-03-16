import { Grid, Typography } from '@mui/material'

const Footer = () => {
  return (
    <div>
        <Grid className="bg-black text-white text-center mt-10"
        container
        sx={{bgcolor:"black",color:"white", py:3}}
        >
            <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{ fontSize: "1.5rem", marginBottom: "1rem" }} varient="h6">Soltions</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Marketingt</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Analytics</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Commerce</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Insights</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{ fontSize: "1.5rem", marginBottom: "1rem" }} varient="h6">Documentaion</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Guides</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>API Status</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{ fontSize: "1.5rem", marginBottom: "1rem" }} varient="h6">Legal</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Claim</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Privacy</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Terms</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography sx={{ fontSize: "1.5rem", marginBottom: "1rem" }} varient="h6">Company</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>About</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Blog</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Jobs</Typography>
                <Typography className="pb-2" varient="h6" gutterButton>Partners</Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer