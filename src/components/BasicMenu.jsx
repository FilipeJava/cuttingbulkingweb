"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { destroy } from '@/actions/registro';
import toast from 'react-hot-toast';
import {useRouter} from 'next/navigation'

export default function BasicMenu({registro}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleEdit = () => {
    router.push("/registro/"+ registro.id + "/edit")
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    const response = await destroy(registro.id)

    if (response?.error){
      toast.error(response.error, { style: {
        borderRadius: '8px',
        background: '#333',
        color: '#fff',
      }})
    }else{
      toast.success("registro apagado com sucesso", { style: {
        borderRadius: '8px',
        background: '#333',
        color: '#fff',
      }})
    }
    setAnchorEl(null);
  }

  return (
    <div >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ChevronDownIcon className='h-6 w-6'/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleEdit}>Editar</MenuItem>
        <MenuItem onClick={handleDelete}>Apagar</MenuItem>
       
      </Menu>
    </div>
  );
}