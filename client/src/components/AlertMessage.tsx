import {Alert} from '@mui/material';
import {styled} from '@mui/material/styles'

export default function AlertMessage(props: any) {

  return (
    <CustomAlert variant='filled' severity={props.severity}>
      <p>{props.message}</p>
    </CustomAlert>
  )
}

const CustomAlert = styled(Alert)`
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
      display: block;
    }
`