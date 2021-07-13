import { ListItem } from '@chakra-ui/react'
import React from 'react'
import { useDrag } from 'react-dnd'

function Color({item, index, type, addToDrag}) {
    const [{isDragable},dragRef]=useDrag({
        type:type,
        item:()=>({...item, index}),
        end:(item, monitor )=>{
            const dropRestult=monitor.getDropResult();
            if(dropRestult&& item){
                addToDrag(item)
            }
        },
        collect:(monitor)=>({
            isDragging:monitor.isDragging
        })
    }) 
    return (
        <div>
            <ListItem 
            p="2"
             borderRadius="md" 
             boxShadow="md"
              mb="2"
               textAlign="center" 
               style={{background:item.color}}
               ref={dragRef}
               >{item.color}</ListItem>
        </div>
    )
}

export default Color
