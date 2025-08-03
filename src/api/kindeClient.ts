import createKindeClient, { type KindeClient } from '@kinde-oss/kinde-auth-pkce-js'

let kindeClient: KindeClient | null = null

export async function initKindeClient(): Promise<KindeClient> {
    if (!kindeClient) {
        kindeClient = await createKindeClient({
            client_id: import.meta.env.VITE_KINDE_CLIENT_ID,
            domain: import.meta.env.VITE_KINDE_DOMAIN,
            audience: import.meta.env.VITE_KINDE_AUDIENCE,
            redirect_uri: window.location.origin + '/callback',
            on_redirect_callback() {},
        })
    }
    return kindeClient
}