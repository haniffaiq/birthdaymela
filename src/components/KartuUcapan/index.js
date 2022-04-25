import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/1.jpg"
import "./style.css"

const KartuUcapan = () => {
    return (
        <div >
            <Container>
                <Card className="text-center bg-card">
                    <Row className="justify-content-md-center">

                        <Row className="justify-content-md-center ">
                            <Card.Img className="circle-image" variant="top" src={image1} style={{ width: '15rem' }} />
                        </Row>
                        <Row>
                            <Card.Body>
                                <Card.Title className="header-text">Happy Birthday Sayang :)</Card.Title>
                                <Card.Text className="ucapan">
                                    <p>Haloo sayang, selamat bertambah umur yah, aku ga pengen bilang selamat ulang tahun,
                                    karena, aku ga pengen kamu mengulangi kesalahan kamu tahun lalu.
                                    Semoga segala yang sedang kamu semogakan, lekas terlaksana dan menjadi sebuat kenyataan.
                                    Karena, buat segala doa yang terbaik untuk kamu, hanya kamu dan tuhan yang tau, aku hanya bertugas mengamini saja.
                                    Tetapi aku juga berharap, kamu menjadi lebih jujur pada diri kamu sendiri, tidak menutupi semuanya dengan ceriamu,
                                    walaupun aku sangan suka dengan ceria mu. Aku ingin terus melihat senyum bahagiamu tanpa ada sesuatu kesedihan dibaliknya.
                                    Semoga di tahun ini, kamu diberikan pundak yang lebih kuat, dada yang lebih lapang, dan hati yang lebih tangguh,
                                            sama seperti pundak,dada, dan hatimu saat ini yang lebih kuat dari kamu di tahun lalu.</p>
                                    <br />
                                    <p>Aku bukan orang yang pandai menjahit rangkaian kata,<br />
                                            Aku bukan orang yang selalu pandai membuat canda untuk membuat mu selalu tertawa<br />
                                            Aku juga bukan orang yang pandai membuat mu selalu ceria<br />
                                            Tapi aku akan berusaha selalu ada<br />
                                            Walaupun kamu jauh disana<br /><br />
                                            Aku akan selalu berusaha
                                            </p>

                                    <p>Tertanda <br/><br/><br/> Your Bae</p>
                                </Card.Text>

                            </Card.Body>
                        </Row>

                    </Row>


                </Card>


            </Container>
        </div>

    );
};

export default KartuUcapan;