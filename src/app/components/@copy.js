import Link from 'next/link'
import Typography from '@mui/material/Typography';

export default function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          ADEEMOO
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }