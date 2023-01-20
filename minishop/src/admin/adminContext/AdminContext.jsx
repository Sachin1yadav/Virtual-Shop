import {useSelector} from 'react-redux'
import AdminLogin from '../adminAuth/AdminLogin'

const AdminContext = ({children}) => {
  let isauth = useSelector(val=>val.adminAuth.isAuth)
if(isauth){
  return children
}
else{
  return <AdminLogin/>
}
}

export default AdminContext