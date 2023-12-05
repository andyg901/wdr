import React from 'react'

export const ThemeSelector = ({ value, onChange }) => {
    return (
        <select value={value} onChange={(e) => onChange((e.target.value || '').toLowerCase())}>
            <option value="Gray">Gray theme</option>
            <option value="Zinc">Zinc theme</option>
            <option value="Neutral">Neutral theme</option>
            <option value="Stone">Stone theme</option>
            <option value="Orange">Orange theme</option>
            <option value="Yellow">Yellow theme</option>
            <option value="Lime">Lime theme</option>
            <option value="Green">Green theme</option>
            <option value="Emerald">Emerald theme</option>
            <option value="Teal">Teal theme</option>
            <option value="Cyan">Cyan theme</option>
            <option value="Sky">Sky theme</option>
            <option value="Blue">Blue theme</option>
            <option value="Indigo">Indigo theme</option>
            <option value="Violet">Violet theme</option>
            <option value="Purple">Purple theme</option>
            <option value="Fuchsia">Fuchsia theme</option>
            <option value="Pink">Pink theme</option>
            <option value="Rose">Rose theme</option>
        </select>
    )
}
