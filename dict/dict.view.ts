namespace $.$$ {
	export class $invite_dict extends $.$invite_dict {
		@ $mol_mem
		word_label( next?: any ): string {
			return this.word() || 'HUMMINGBIRD'
		}

		@ $mol_mem
		word( next?: any ): string {
			return this.$.$mol_state_arg.value('word', next) ?? ''
		}


		@ $mol_mem
		transcription( next?: any ): string {
			if (this.word() === '') return 'hʌ́mɪŋbəːd'
			if (this.word()) {
				try {
					return this.$.$mol_fetch.text(this.api_uri() + this.word())
				} catch (error) {
					if( error instanceof Promise ) $mol_fail_hidden( error )
					return 'Ошибка запроса'
				}
			}
			return next ?? ''
		}

	}
}
