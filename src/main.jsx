
import { createRoot } from 'react-dom/client'
import BT1_HomeComponents from './components/BT1_HomeComponents'
import './css/index.css'
import DataBinding from './databuilding/DataBiding'
import HandleEvent from './HandleEvent/HandleEvent'
import RenderCondition from './RenderCondition/RenderCondition'
import RenderState from './RenderState/RenderState'
import DemoStateChangeNumber from './RenderState/DemoStateChangeNumber'
import DemoChangeCar from './RenderState/DemoChangeCar'
import DemoTinke from './RenderState/DemoTinke'
import StyleComponent from './StyleComponents/StyleComponent'
import DemoProps from './Props/DemoProps'
import BT_productlish from './Props/BT-props/BT_productlish'
import BT_StateProps from './BT_StateProps/BT_StateProps'
import BT_MonAn from './Props/BT_MonAn/BT_MonAn'
import ProductsPage from './API/ProductsPage'
import TodoListApi from './API/TodoListApi'
import DemoFormLogin from './Form/DemoFormLogin'
import DemoFormik from './Form/DemoFormik'


/*
  Phân biệt state và props:
  state: giá trị thay đổi dùng để binding lên giao diện, state có thể gán lại giá trị ( state,setState)
  props: giá trị có thể thay đổi dùng để binding lên giao diện, props không thể gán lại giá trị (readonly)
*/


createRoot(document.getElementById('root')).render(
  <div className='w-full'>
    {/* <BT1_HomeComponents></BT1_HomeComponents> */}
    {/* <DataBinding/> */}
    {/* <HandleEvent/> */}
    {/* <RenderCondition/> */}
    {/* <RenderState/> */}
    {/* <DemoStateChangeNumber/> */}
    {/* <DemoChangeCar/> */}
    {/* <DemoTinke/> */}
    {/* <StyleComponent/> */}
    {/* <DemoProps/> */}
    {/* <BT_productlish/> */}
    {/* <BT_StateProps/> */}
    {/* <BT_MonAn/> */}
    {/* <ProductsPage/> */}
    {/* <TodoListApi/> */}
    {/* <DemoFormLogin/> */}
    <DemoFormik/>

  </div>
  
)


