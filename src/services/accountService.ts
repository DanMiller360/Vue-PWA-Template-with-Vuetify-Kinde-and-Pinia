import bffClient from "@/api/bffClient";
import type { Account } from "@/models/Account";

export async function getOrCreateAccount(): Promise<Account> {
    const response = await bffClient.post<Account>('/account');
    return response.data;
}