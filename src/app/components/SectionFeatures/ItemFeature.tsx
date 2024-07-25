import { ReactNode } from "react";
import { FiMail } from "react-icons/fi";

interface ItemFeatureProps {
    icon: ReactNode
    title: string
    text: string
}
export function ItemFeature({ icon, title, text }: ItemFeatureProps) {
    return (
        <div className="text-center w-full max-w-96">
            <div className="w-12 h-12 bg-brand-100 rounded-full mx-auto border-8 border-brand-50 mb-5 flex items-center justify-center">{icon}</div>
            <h3 className="text-gray-900 text-xl/6 font-medium mb-2">{title}</h3>
            <p className="text-gray-600 leading-6">{text}</p>
        </div>
    )
}