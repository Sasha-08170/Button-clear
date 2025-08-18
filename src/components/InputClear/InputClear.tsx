import React, { useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { InputWrapper, InputField, ClearButton } from "./InputClear.styles";

interface InputClearProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void
}

const InputClear: React.FC<InputClearProps> = ({
    placeholder = "Введите текст...",
    value,
    onChange,
}) => {
    const [internalValue, setInternalValue] = useState<string>("");

    const inputValue = value !== undefined ? value : internalValue;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (value === undefined) setInternalValue(val);
        onChange?.(val);
    };

    const handleClear = () => {
        if (value === undefined) setInternalValue("");
        onChange?.("");
    };

    return (
        <InputWrapper>
            <InputField
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
            />
            {inputValue && (
                <ClearButton type="button" onClick={handleClear}>
                    <FontAwesomeIcon icon={faTimes} size="sm" /> {/* крестик */}
                </ClearButton>
            )}
        </InputWrapper>
    );
};

export default InputClear;
