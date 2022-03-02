import { useParams } from "react-router-dom";
import { Header, DeliveryNoteContainer, DeliveryNoteTitle, DeliveryAddress,
         Table, Th, Td, DateContainer, Supplier, Client, Footer, Title, StyledH2 } from "./style";


const Results = () => {

    const {results} = useParams()
    const {cart, clientName, deliveryDate} = JSON.parse(results)

    const headerInfo = {
        title : "AGBERE ABDOUL RACHID MSAREY",
        address : "BPE  2468  BAMAKO  TOROKOROBOUGOU",
        tel : "Tél : 00223  79 02 50 02"
    }
    // const deliveryNoteNumber = 0

    const [year, month, day] = deliveryDate.split('-')
    

    return(
        <div>
            <Header>
                <Title> {headerInfo.title} </Title>
                <StyledH2> {headerInfo.address} </StyledH2>
                <StyledH2 size='20px'> {headerInfo.tel} </StyledH2>
            </Header>
            <DeliveryNoteContainer>
                <DeliveryNoteTitle>Bordereau de livraison N°</DeliveryNoteTitle>
                <DeliveryAddress>LIEU DE LIVRAISON :   {clientName}    Bamako - Mali</DeliveryAddress>
                <Table>
                    <thead>
                        <tr >
                            <Th size = "10px" >N° ORDRE</Th>
                            <Th size = "150px">DESIGNATION</Th>
                            <Th size = "10px">Quantité <br />livrée</Th>
                            <Th size = "40px">Observation</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(({id, description, amount}, index) => (
                                <tr key = {id}>
                                    <Td>{index<10 ?`0${index + 1}` : index+1 }</Td>
                                    <Td isCenter = {false} >{description}</Td>
                                    <Td>{amount}</Td>
                                    <Td>{  }</Td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </Table>
                <DateContainer>Fait à Bamako, le ……{day}……/……{month}……./.{year}.</DateContainer><br/>

                <Supplier>LE FOURNISSEUR</Supplier>
                <Client>LE CLIENT </Client>
            </DeliveryNoteContainer>
            <Footer>
                <StyledH2 size='15px'> {`${headerInfo.address}    ${headerInfo.tel}`} </StyledH2>
            </Footer>
        </div>
    )
}
export default Results;