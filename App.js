import logo from './logo.svg';
import './App.css';
import {Container, List , Flex, Stack, ListItem, Heading} from '@chakra-ui/react'
import { useState } from 'react';
import Color from './components/Color';
import { useDrop } from 'react-dnd';
function App() {
  let [colors, setColor]=useState([
    {color:"Green"},
    {color:"black"},
    {color:"red"},
    {color:"blue"},

  ]);
  let [drag, setDrag]=useState([]);
  const [{isOver}, addToDrag]= useDrop({
    accept:"colors",
    collect:(monitor=>({isOver:!!monitor.isOver()}))
  });
  const [{isOver:isDrag}, removeToDrag]= useDrop({
    accept:"drag",
    collect:(monitor=>({isOver:!!monitor.isOver()}))
  })
  const moveColorToDrop=(item)=>{ 
    setDrag((preVal=>preVal.filter((_, i)=>i!==item.index)))
    
    setDrag(preVal=>[...preVal, item])
    drag.forEach((d)=>{
      if(d.color===item.color){
        alert("alreay exist")
    setDrag([...drag])
        
      }
    })
   
  }
  const removeColorToDrop=(item)=>{
    setDrag((preVal=>preVal.filter((_, i)=>i!==item.index)))
    setColor(preVal=>[...preVal, item])
    console.log(item)
  }
  return (
    <div >
    <Heading textAlign="center" color="blue.400">Drop  & Drag App</Heading>
      <Container maxW="800px">
      <Flex justify="space-between" height="90vh" align="center">
       
        <Stack width="300px">
        <Heading fontSize="30px" color="yellow.800" textAlign="center">
          Drag
        </Heading>
<List
 p="4"
  minH="70vh" 
  boxShadow="x1"
    borderRadius="md" 
   background="wheat"
    ref={removeToDrag}
    >
  {
    colors.map((color, index)=>{
      return <Color key={color.color} index={index} item={color} type="colors" addToDrag={moveColorToDrop}/>
    })
  }
</List>
        </Stack>
        <Stack width="300px">
        <Heading fontSize="30px" color="yellow.800" textAlign="center">
          Drop
        </Heading>
<List p="4" minH="70vh" boxShadow="x1"  borderRadius="md" ref={addToDrag}background="ButtonHighlight" >
{
    drag.map((color, index)=>{
      return <Color key={color.color} index={index} item={color} type="drag" addToDrag={removeColorToDrop}/>
    })
  }
</List>
        </Stack>
      </Flex>
      </Container>
    </div>
  );
}

export default App;
