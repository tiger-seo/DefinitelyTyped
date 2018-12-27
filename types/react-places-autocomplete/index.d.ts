// Type definitions for react-places-autocomplete 7.2
// Project: https://github.com/kenny-hibino/react-places-autocomplete/
// Definitions by: Guilherme Hübner <https://github.com/guilhermehubner>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Nokky Goren <https://github.com/ApeNox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
//
/// <reference types="googlemaps" />
import * as React from 'react';

export interface formattedSuggestionType {
    mainText: string;
    secundaryText: string;
}

export interface PropTypes {
    inputProps?: {
        type?: string;
        name?: string;
        placeholder?: string;
        disabled?: boolean;
    };
    onError?: (status: string, clearSuggestion: () => void) => void;
    onSelect?: (address: string, placeID: string) => void;
    renderSuggestion?: (suggestion: string, formattedSuggestion: formattedSuggestionType) => React.ReactNode;
    classNames?: {
        root?: string;
        input?: string;
        autocompleteContainer?: string;
        autocompleteItem?: string;
        autocompleteItemActive?: string;
    };
    styles?: {
        root?: React.CSSProperties;
        input?: React.CSSProperties;
        autocompleteContainer?: React.CSSProperties;
        autocompleteItem?: React.CSSProperties;
        autocompleteItemActive?: React.CSSProperties;
    };
    searchOptions?: {
        bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
        componentRestrictions?: google.maps.GeocoderComponentRestrictions;
        location?: google.maps.LatLng | google.maps.LatLngLiteral;
        offset?: number | string;
        radius?: number | string;
        types?: string[];
    };
    value?: string;
    onChange?: (value: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

    debounce?: number;
    highlightFirstSuggestion?: boolean;
    googleCallbackName?: string;
    renderFooter?: () => React.ReactNode;
    shouldFetchSuggestions?: (value: string) => boolean;
}

export function geocodeByAddress(address: string, callback: (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => void): void;
export function geocodeByAddress(address: string): Promise<google.maps.GeocoderResult[]>;

export function geocodeByPlaceId(placeId: string, callback: (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => void): void;
export function geocodeByPlaceId(placeId: string): Promise<google.maps.GeocoderResult[]>;

export function getLatLng(results: google.maps.GeocoderResult): Promise<google.maps.LatLngLiteral>;

export default class PlacesAutocomplete extends React.Component<PropTypes> {}
