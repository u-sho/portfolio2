// this action (https://svelte.dev/tutorial/actions) allows us to
// progressively enhance a <form> that already works without JS
export function enhance(
	form: HTMLFormElement,
	{
		pending,
		error,
		result
	}: {
		pending?: (data: FormData, form: HTMLFormElement) => void;
		error?: (res: Response, error: Error, form: HTMLFormElement) => void;
		result: (res: Response, form: HTMLFormElement) => void;
	}
) {
	let current_token: Record<string, never>;

	async function handle_submit(e: Event) {
		const token = (current_token = {});

		e.preventDefault();

		const body = new FormData(form);

		if (pending) pending(body, form);

		try {
			const res = await fetch(form.action, {
				method: form.method,
				headers: {
					accept: 'application/json'
				},
				body
			});

			// deepcode ignore UncomaparableValues: checking the same object or else
			if (token !== current_token) return;

			if (res.ok) {
				result(res, form);
			} else if (error) {
				error(res, null, form);
			} else {
				console.error(await res.text());
			}
		} catch (e: unknown) {
			if (error) {
				error(null, e as Error, form);
			} else {
				throw e;
			}
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-misused-promises
	form.addEventListener('submit', handle_submit);

	return {
		destroy() {
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			form.removeEventListener('submit', handle_submit);
		}
	};
}
