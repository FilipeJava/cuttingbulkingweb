import BasicMenu from '@/components/BasicMenu';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';



export default function RegistroRow  ({registro}){
    return(
        <div id='data-row' className='flex justify-between hover:bg-slate-700 p-2 my-2 cursor-pointer rounded' >
            <ClipboardDocumentListIcon className="h-6 w-6" />
              <span>{registro.tipo}</span>
              <span>{registro.descricao}</span>
              <span>{registro.data}</span>
              <span>{registro.calorias}</span>
              <BasicMenu/>
            </div>      
    );
}

