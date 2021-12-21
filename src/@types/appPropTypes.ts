import { Launch, Rocket } from "./appTypes";

export interface RocketImageProps {
    images: string[]
}

export interface RocketCardProps {
    index: number;
    rocket: Rocket;
}

export interface AppSpinnerProps {
    color: "primary" | "secondary";
}

export interface AppOverlayProps {
    showOverlay: boolean;
    children: React.ReactNode;
}

export interface LaunchInCartRowProps {
    launch: Launch;
}

export interface LaunchRowProps {
    launch: Launch;
}

export interface TotalCartRowProps {
    launchesInCart: Launch[];
}

export interface AppPaginationProps {
    totalPages?: number,
    page: number,
    hasPrevPage?: boolean,
    hasNextPage?: boolean,
    setPage: (page: number) => void
}
