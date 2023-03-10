import { IconCircle } from "../../../../components/IconCircle";
import { BoldParagraph, DetailContent, InfoContent } from "./styles";

interface InfoProps {
    typeIcon: 'map' | 'timer' | 'dollar',
    street?: string | null,
    payment?: string | null,
}

export function Info({typeIcon, street='', payment=''}:InfoProps) {
  switch (typeIcon){
    case 'map':
        return(
            <InfoContent>
                <IconCircle element="map"/>
                <DetailContent>
                    <span><p>Entrega em </p><BoldParagraph>{street}</BoldParagraph></span>
                    <span><p>Rio de Janeiro - RJ</p></span>
                </DetailContent>
            </InfoContent>
            
        )
    case 'timer':
    return(
        <InfoContent>
            <IconCircle element="timer"/>
            <DetailContent>
                <span><p>Previsão de entrega</p></span>
                <span><BoldParagraph>20 min - 30 min</BoldParagraph></span>
            </DetailContent>
        </InfoContent>
        
    )
    case 'dollar':
    return(
        <InfoContent>
            <IconCircle element="dollar"/>
            <DetailContent>
                <span><p>Pagamento na entrega</p></span>
                <span><BoldParagraph>{payment}</BoldParagraph></span>
            </DetailContent>
        </InfoContent>
        
    )
  }}