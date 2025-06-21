import Layout from "@/Layouts/layout/layout";
import React, { Component, useState } from "react";
import ConceptoTabla from "./partials/ConceptoTabla";
// import Menu from "./partials/menu";
// import Dialogo from "./partials/Dialogo";

const Index = (props) => {

    // console.log("estos son los props", props);


    return (
        <Layout>
            <div className="card grid">
                {/* <Menu/> */}

                <h3>Actividades</h3>
                <div className="col-12">
                    <ConceptoTabla />
                </div>
            </div>
        </Layout>
    );
};

export default Index;
