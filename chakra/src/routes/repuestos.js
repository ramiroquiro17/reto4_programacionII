import { Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import Producto from '../components/productos';
import Sidebar from '../components/lista';
import Navbar from '../components/barraNavegacion';
import Footer from '../components/footer';
export default function Repuestos(){
    return (<><Navbar />
    <Grid templateColumns="repeat(6, 1fr)">
    <GridItem colSpan={1} as="aside">
      <Sidebar />
    </GridItem>
    <GridItem colSpan={5} margin={12}>
      <SimpleGrid spacing={4} minChildWidth={250}>
        <Producto 
        nombre="Pedales BMX MTB WKNS 571"
        img="rep1"
        precio="5.000"/>
        <Producto 
        nombre="Terminal funda freno negro"
        img="rep2"
        precio="1.000"/>
        <Producto 
        nombre="Tope Aluminio WKNS Cable Cambio/Freno"
        img="rep3"
        precio="100"/>
        <Producto 
        nombre="Pedales BMX MTB WKNS 571"
        img="rep1"
        precio="5.000"/>
        <Producto 
        nombre="Terminal funda freno negro"
        img="rep2"
        precio="1.000"/>
        <Producto 
        nombre="Tope Aluminio WKNS Cable Cambio/Freno"
        img="rep3"
        precio="100"/>
      </SimpleGrid>
    </GridItem>
  </Grid>
  <Footer/></>) 
}