import Layout from "@/Layouts/layout/layout";
import React, { Component, useState } from "react";
import ConceptoTabla from "./partials/ConceptoTabla";


const Index = (props) => {

    return (
        <Layout>
            <div className="card grid">
                <h3>Actividades</h3>
                <div className="col-12">
                    <ConceptoTabla />
                </div>
            </div>
        </Layout>
    );
};

export default Index;
