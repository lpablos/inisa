import Layout from "@/Layouts/layout/layout";
import React, { Component, useState } from "react";
import ConceptoTabla from "./partials/ConceptoTabla";
import Menu from "./partials/menu";
import Dialogo from "./partials/Dialogo";

const Index = (props) => {
    const [catalogo, setCatalogo] = useState(null);
    console.log("El catalogo selecionado", catalogo);

    return (
        <Layout>
            <div className="card grid">
                {/* <Menu/> */}


                <div className="col-12">
                    <ConceptoTabla />
                </div>
            </div>
        </Layout>
    );
};

export default Index;
