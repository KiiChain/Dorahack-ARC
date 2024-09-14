"use client";
import { Directory, File } from '@/interface/custom/folder-tree/folder-tree';
import { Button } from '@/ui/button';
import TextInput from '@/ui/text-input';
import { directoryAlreadyExists, fileNameAlreadyExists } from '@/utils';
import { GenerateDocumentationInstructions, GenerateTestInstructions } from '@/utils/prompt';
import { Content } from '@google/generative-ai';
import { useCompletion } from 'ai/react';
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


const Plugin = ({ selectedFile, rootDir, setRootDir }: { selectedFile: File | undefined, rootDir: Directory, setRootDir: React.Dispatch<React.SetStateAction<Directory | undefined>> }) => {
    const { complete } = useCompletion({
        api: "/api/audit",
    });
    const [name, setname] = useState("")
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#ffffff");
    const [loading2, setLoading2] = useState(false)
    const [error, setError] = useState("")
    const GenerateDocs = () => {
        if (!name || name.length == 0) {
            setError("Enter file name")
        }
        if (fileNameAlreadyExists(rootDir, name + ".md")) setError("File name already exists")
        setLoading(true);

        const payload: Content[] = [
            GenerateDocumentationInstructions(),
            {
                parts: [{ text: JSON.stringify(rootDir) }],
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
                // let parsedResponse = JSON.parse(cleanedResponse); // Parse JSON
                // console.log("Cleaned response:", cleanedResponse);
                // setText(parsedResponse); // Store parsed JSON in state
                // @ts-ignore
                let file: File = {};
                file.content = cleanedResponse
                file.depth = 1
                file.name = name + ".md"
                file.id = "documentation"
                file.parentId = rootDir.id
                file.type = "file"
                // @ts-ignore
                setRootDir((prev) => ({ ...prev, files: [...(prev?.files), file] }))

            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    };
    const GenerateTests = () => {
        if (!selectedFile) return
        const payload2: Content[] = [
            GenerateTestInstructions(),
            {
                parts: [{ text: JSON.stringify(selectedFile) }],
                role: "user"
            }
        ]
        complete("", {
            body: {
                messages: payload2,
            },
        })
            .then((newCompletion) => {
                console.log(".the n m aaya ")
                const aiResponse = newCompletion || "There was an error with the AI response. Please try again.";
                const cleanedResponse = aiResponse.replace(/```(\w+)?/g, ""); // Remove code block formatting
                // let parsedResponse = JSON.parse(cleanedResponse); // Parse JSON
                // console.log("Cleaned response:", cleanedResponse);
                // setText(parsedResponse); // Store parsed JSON in state

                // @ts-ignore
                let file: File = {};
                file.content = cleanedResponse
                file.depth = 3
                file.name = name + ".test.ts"
                file.id = selectedFile + ".test.ts"
                file.parentId = "tests"
                file.type = "file"
                console.log("file bani ")
                // @ts-ignore
                if (directoryAlreadyExists(rootDir, "tests")) {
                    console.log("directoryu h")
                    const par = rootDir.dirs[0]
                    const testdir = par.dirs.find((val) => val.name == "tests")
                    if (testdir) {
                        testdir.files.push(file)
                        let index: number = -1;
                        par.dirs.find((val, idx) => {
                            if (val.name == "tests") index = idx
                        })
                        console.log("ankit don ", index)
                        par.dirs[index].files.push(file)
                        // @ts-ignore
                        setRootDir((prev) => ({ ...prev, dirs: [par] }))
                    }

                } else {
                    console.log("dir ni h")
                    // @ts-ignore
                    let newdir: Directory = {}
                    newdir.depth = 2
                    newdir.dirs = []
                    newdir.files = [file]
                    newdir.name = "tests"
                    newdir.id = "tests"
                    newdir.parentId = "0"
                    newdir.type = "directory"
                    const par = rootDir.dirs[0]
                    par.dirs.push(newdir)
                    let dirs = []
                    dirs.push(par)
                    console.log("ankit baba ", dirs)
                    // @ts-ignore
                    setRootDir((prev) => ({ ...prev, dirs }))

                }


            })
            .catch((err) => console.log(err))
            .finally(() => {
                console.log("fin chala")
                setLoading(false);
            });
    }


    return (
        <div className="p-1">
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
                !loading && !loading2 &&
                <>
                    <Button
                        className=" rounded-md flex gap-2 items-center transition-all bg-[#3c3c3c] text-white px-4 py-2 w-full text-center"
                        onClick={GenerateDocs}
                    >
                        Generate Documentation
                    </Button>
                    <div className='mt-6 text-sm italic '>Enter file name</div>
                    <TextInput
                        name='name'
                        id='name'
                        placeholder='e.g. documentation ,description etc. '
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        className='bg-black rounded-md border-[0.1px] border-gray-600 '
                        errorMessage={error}
                    />

                    <Button
                        className="mt-8 rounded-md flex gap-2 items-center transition-all bg-[#3c3c3c] text-white px-4 py-2 w-full text-center"
                        onClick={GenerateTests}
                    >
                        Generate Test
                    </Button>
                    <TextInput
                        name='tests'
                        id='tests'
                        value={selectedFile?.name}
                        onChange={(e) => setname(e.target.value)}
                        className='bg-black rounded-md border-[0.1px] border-gray-600 '
                        disabled
                    />

                </>
            }

            <div className='text-neutral-600 italic text-sm'>*this utility adds a file containing documentation of complete project </div>

        </div>
    );
};

export default Plugin;
