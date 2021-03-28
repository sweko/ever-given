export type InvokableCode = (...args: any[]) => any;

export const noop: InvokableCode = () => {}

/**
 * @param {number} blockTime The time the channel should be blocked
 * @param {Function} channel The code to execute once the block is lifted
 * @returns 
 */
export const block = (blockTime: number, channel: InvokableCode = noop): Promise<InvokableCode> => {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            resolve(channel);
        }, blockTime);
    });
}