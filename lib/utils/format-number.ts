import numeral from 'numeral';

export function formatNumber(v?: string | number ): string {
    return numeral(v).format('0,0');
}