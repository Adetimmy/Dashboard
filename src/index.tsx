import React from "react";
import  {createRoot}  from "react-dom/client";
import './index.css'
import {App} from "./App";
import ContentProvider from "./context/ContentProvider";
import { registerLicense } from "@syncfusion/ej2-base";
import {Key} from './key'

registerLicense(Key)

const root = createRoot(document.querySelector('#root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ContentProvider>
            <App />
        </ContentProvider> 
    </React.StrictMode>
)