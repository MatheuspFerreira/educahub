import ForumContainer from "./ForumContainer";
import "./styles/forumContent.css";

export default function ForumContent () {
    const moca = [
        {
            text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, justo eget commodo eleifend, 
            felis nunc fringilla turpis, quis ultricies mi nisi a ligula. Sed interdum justo ac tellus tristique, 
            vel feugiat justo pulvinar. Proin nec fermentum mi. Vivamus ac est in lorem dictum interdum. 
            Sed euismod felis id tortor rhoncus, at bibendum urna volutpat. Duis vitae nulla nec ipsum venenatis lacinia. 
            Etiam varius urna at interdum vestibulum.`,
            name:'Brunce Wayne',
            date:"19/08/2023"

        },
        {
            text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, justo eget commodo eleifend, 
            felis nunc fringilla turpis, quis ultricies mi nisi a ligula. Sed interdum justo ac tellus tristique, 
            vel feugiat justo pulvinar. Proin nec fermentum mi. Vivamus ac est in lorem dictum interdum. 
            Sed euismod felis id tortor rhoncus, at bibendum urna volutpat. Duis vitae nulla nec ipsum venenatis lacinia. 
            Etiam varius urna at interdum vestibulum.`,
            name:'Thanos',
            date:"19/08/2023"

        },
        {
            text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, justo eget commodo eleifend, 
            felis nunc fringilla turpis, quis ultricies mi nisi a ligula. Sed interdum justo ac tellus tristique, 
            vel feugiat justo pulvinar. Proin nec fermentum mi. Vivamus ac est in lorem dictum interdum. 
            Sed euismod felis id tortor rhoncus, at bibendum urna volutpat. Duis vitae nulla nec ipsum venenatis lacinia. 
            Etiam varius urna at interdum vestibulum.`,
            name:'Cartman',
            date:"20/08/2023"

        },
        {
            text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, justo eget commodo eleifend, 
            felis nunc fringilla turpis, quis ultricies mi nisi a ligula. Sed interdum justo ac tellus tristique, 
            vel feugiat justo pulvinar. Proin nec fermentum mi. Vivamus ac est in lorem dictum interdum. 
            Sed euismod felis id tortor rhoncus, at bibendum urna volutpat. Duis vitae nulla nec ipsum venenatis lacinia. 
            Etiam varius urna at interdum vestibulum.`,
            name:'Tony Stark',
            date:"21/08/2023"

        }
    ];

    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`

    console.log(currentDate)

    return(
        <div className="ForumContent_container">
            <ForumContainer 
                disabled={true}
                text={`Explore nosso Fórum Livre de Bate Papo, um espaço essencial em nossa plataforma educacional. Aqui, 
                    alunos e professores convergem para debater variados temas, de conceitos acadêmicos a interesses pessoais, 
                    fomentando uma comunidade dinâmica.
                    Questões são respondidas, dúvidas esclarecidas e experiências compartilhadas, unindo conhecimento formal e prático. 
                    Promovemos um ambiente colaborativo, quebrando barreiras hierárquicas para estimular debates autênticos.
                    Nossa visão é criar um local seguro e enriquecedor, onde aprendizes e instrutores dialogam sem restrições.
                    O Fórum Livre de Bate Papo é o espaço onde sua jornada educacional se expande, moldada por conexões e discussões que 
                    transcendem a sala de aula. Para participar basta digitar seu texto no quadro abaixo e clicar em postar.

                `
                }
                name="Educa Hub"
                date="02/08/2023"
            
            />
            <ForumContainer 
                disabled={false}
                text={``
                }
                name="Nome do Aluno"
                date={formattedDate}
            
            />
            {
                moca.map((current:any)=>{
                    return  <ForumContainer 
                        disabled={true}
                        text={ current.text }
                        name={ current.name }
                        date={ current.date }
                
                    />
                })
            }
    
        </div>
    )
}