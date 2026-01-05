export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "848579814762047";

export const pageview = () => {
    if (typeof window.fbq !== "undefined") {
        window.fbq("track", "PageView");
    }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}, eventData = {}) => {
    if (typeof window.fbq !== "undefined") {
        window.fbq("track", name, options, eventData);
    }
};
