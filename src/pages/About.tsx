import { Image, Typography } from "antd";
import { AboutDiv } from "../components/styles";
import frontIMG from "../assets/image/front.jpeg";

export default function About() {
    const handleClick = () => {
        window.open('https://www.instagram.com/lojadakasaoficial', '_blank');
    };

    return (
        <AboutDiv>
            <Typography.Title level={1}>Nossa história</Typography.Title>
            <br />
            <Typography.Text className="body-about">
                A Da Kasa nasceu em <b>1998</b>, com um propósito simples e apaixonante: transformar casas em lares cheios de <b>estilo</b>, <b>conforto</b> e <b>boas lembranças</b>. 
                <br />
                <br />
                Localizada estrategicamente na Rodovia BR 277, Km 121 (sentido Curitiba/Ponta Grossa), no bairro Rondinha, em Campo Largo — a loja se tornou referência regional em produtos de decoração, utilidades e presentes. <br />
                <br />
                Desde o início, a Da Kasa se destacou por unir qualidade, bom gosto e atendimento próximo, criando uma relação de amizade com cada cliente que entra pela porta. Com o passar dos anos, a loja acompanhou as tendências do mercado, renovando constantemente seu mix de produtos e trazendo novidades que inspiram ambientes e momentos especiais. <br />
                <br />
                Mais do que uma loja, a Da Kasa é um espaço de <b>inspiração</b>. Cada prateleira, cada detalhe e cada coleção contam um pedacinho da nossa trajetória, construída com dedicação e carinho por uma equipe que ama o que faz. <br />
                <br />
                Em mais de duas décadas de história, crescemos junto com nossos clientes — famílias que hoje fazem parte da nossa própria história.<br />
                <br />
                Siga nosso dia a dia, lançamentos e inspirações também pelo <Typography.Link style={{ fontSize: "16px", fontWeight: "bold", textDecoration: "underline" }} onClick={handleClick}>Instagram</Typography.Link> e venha nos visitar.<br /><br />
            </Typography.Text>
            <Typography.Title level={4}>
                Na Da Kasa, cada escolha é feita para deixar o seu lar ainda mais especial!
            </Typography.Title>
            <br />
            <Image src={frontIMG}></Image>
        </AboutDiv>
    )
}