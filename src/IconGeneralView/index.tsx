export declare interface IconGeneralViewProps {
    fontSize?: string,
}

export const IconGeneralView = (
    props: IconGeneralViewProps
) => {
    const { fontSize } = props;

    return (
        <svg className="tw-cursor-pointer" width="1em" height="1em" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: fontSize }}>
            <path d="M14.3987 4.75563C14.5691 4.94445 14.6634 5.18977 14.6634 5.44412C14.6634 5.69847 14.5691 5.94379 14.3987 6.13261C13.3197 7.29379 10.8637 9.5545 7.99675 9.5545C5.12975 9.5545 2.6738 7.29379 1.59483 6.13261C1.42441 5.94379 1.33008 5.69847 1.33008 5.44412C1.33008 5.18977 1.42441 4.94445 1.59483 4.75563C2.6738 3.59445 5.12975 1.33374 7.99675 1.33374C10.8637 1.33374 13.3197 3.59445 14.3987 4.75563Z" stroke="#8C8C8C" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.9966 7.49942C9.13165 7.49942 10.0518 6.57928 10.0518 5.44423C10.0518 4.30918 9.13165 3.38904 7.9966 3.38904C6.86155 3.38904 5.94141 4.30918 5.94141 5.44423C5.94141 6.57928 6.86155 7.49942 7.9966 7.49942Z" stroke="#8C8C8C" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
