"use client";
import { File } from '@/interface/custom/folder-tree/folder-tree';
import { Button } from '@/ui/button';
import { GenerateAuditInstructions } from '@/utils/prompt';
import { Content } from '@google/generative-ai';
import { useCompletion } from 'ai/react';
import axios from 'axios';
import React, { CSSProperties, useState } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
// Loader styles
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

type resp = [
    {
        [key: string]: string;
    }
];

const Audit = ({ selectedFile }: { selectedFile: File | undefined }) => {
    const { complete } = useCompletion({
        api: "/api/audit",
    });

    const [text, setText] = useState<resp>();
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");

    // Function to generate the vulnerability report
    const checkVulnerability = () => {
        setLoading(true);

        const payload: Content[] = [
            ...GenerateAuditInstructions(),
            {
                parts: [{ text: selectedFile!.content }],
                role: "user",
            },
        ];

        complete("", {
            body: {
                messages: payload,
            },
        })
            .then((newCompletion) => {
                const aiResponse = newCompletion || "There was an error with the AI response. Please try again.";
                const cleanedResponse = aiResponse.replace(/```(\w+)?/g, ""); // Remove code block formatting
                let parsedResponse = JSON.parse(cleanedResponse); // Parse JSON
                console.log("Cleaned response:", parsedResponse);
                setText(parsedResponse); // Store parsed JSON in state
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    };
    const downloadPDF = async () => {
        if (!text) return; // No report to download

        try {
            const response = await axios.post('/api/audit/download', { report: text }, {
                responseType: 'blob', // Important for downloading binary files
            });

            // Create a URL for the PDF blob
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'vulnerability-report.pdf'); // Specify the filename
            document.body.appendChild(link);
            link.click(); // Trigger the download
        } catch (error) {
            console.error('Error downloading PDF:', error);
        }
    };

    // Ensure a file is selected before rendering
    if (!selectedFile) return <div>Select A File</div>;

    return (
        <div className="p-4">
            <SyncLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="mt-4"
            />
            {
                text && !loading &&
                <Button
                    className="flex gap-2 items-center transition-all bg-[#3c3c3c] text-white px-4 py-2 w-full"
                    onClick={downloadPDF}
                >
                    Download PDF
                </Button>
            }
            {!loading && !text && (
                <Button
                    className="flex gap-2 items-center transition-all bg-[#3c3c3c] text-white px-4 py-2 w-full"
                    onClick={checkVulnerability}
                >
                    Generate Vulnerability Report
                </Button>
            )}

            {text && !loading && (
                <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Vulnerability Report</h2>
                    {text.map((section, index) => (
                        <div key={index} className="mb-6">
                            {/* For each key (section title), display it as a heading */}
                            {Object.keys(section).map((key) => (
                                <div key={key}>
                                    <h3 className="text-xl font-semibold capitalize mb-2">{key.replace(/_/g, ' ')}</h3>
                                    <p className="text-neutral-600 italic text-sm">{section[key]}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default Audit;
