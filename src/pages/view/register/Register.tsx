import { AuthContext } from "context/AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

//styled
import { FormContainer, Form, Items, ItemImg } from "./RegisterStyle";

//img 
import register_img from 'assets/img/register.svg';

//service
import { ErrorService } from "components/Services/error/ErrorService";

export const Register = () =>{

    const contextAuth = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [errorOptions, setErrorOptions] = useState({
			error: false,
			message: ''
	});
		
	const [errorInputs, setErrorInputs] = useState({
		name: 0,
		email: 0,
		password: 0,
		confirmPassword: 0,
	});
		

    async function register(name: string, email: string, password: string, confirmPassword: string) {
				if(name != '' && email != '' && password != '' && confirmPassword != ''){
					if(password === confirmPassword) {
						const registerAuth = await contextAuth.register(name, email, password);
						if(registerAuth.erro === true){
							return setErrorOptions(prevError => ({...prevError, error: true, message: 'O usuário já possui cadastro no Sistema'}));
						}
						return navigate('/main');
					}
					return setErrorOptions(prevError => ({...prevError, error: true, message: 'As senhas não coincidem'}));
				}

				if(name == ''){
					return setErrorInputs(prevState => ({...prevState, name: 1}));
				}

				if(email == ''){
					return setErrorInputs(prevState => ({...prevState, email: 1}));
				}

				if(password == ''){
					return setErrorInputs(prevState => ({...prevState, password: 1}));
				}

				if(confirmPassword == ''){
					return setErrorInputs(prevState => ({...prevState, confirmPassword: 1}));
				}
    }

		useEffect(() =>{
			setErrorInputs(prevState => ({
				...prevState,
				name: 0,
				email: 0,
				password: 0,
				confirmPassword: 0,
			}))

		}, [name, email, password, confirmPassword]);

		
		useEffect(() => {
			setTimeout(() => {
				setErrorOptions(prevState => ({
					...prevState,
					error: false,
					masage: ''
				}))
				
			}, 8000)

		}, [errorOptions.error]) 

    return (
      <FormContainer>
				{errorOptions.error && (
					<ErrorService errorText={errorOptions.message} />
				)}

				<Items>
					<ItemImg>
						<img src={register_img}  />
					</ItemImg>

        	<Form>
						<div className="formText">
							<h2>Cadastro</h2>
							<p>
								Já possui uma conta ? 
								<span onClick={() => navigate('/login')}> Acessar agora</span>
							</p>
						</div>

          	<div className="formItems">
							<div className="input">
              	<label htmlFor="name">Nome 
									<span style={{opacity: errorInputs.name}} className="errorInput">Você precisa informar o nome</span>
								</label>
              	<input type="text" name="name" value={name} placeholder="Digite seu nome" required
                	onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
              	/>
          		</div>

          		<div className="input">
              	<label htmlFor="email">E-mail 
									<span style={{opacity: errorInputs.email}} className="errorInput">Você precisa informar o email</span>
								</label>
              	<input type="text" name="email" value={email} placeholder="seu@email.com" required 
                	onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
              	/>
          		</div>

          		<div className="input">
              	<label htmlFor="password">Senha 
									<span style={{opacity: errorInputs.password}} className="errorInput">Você precisa informar a senha</span>
								</label>
              	<input type="password" name="password" value={password} placeholder="Digite sua senha" required
               	 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              	/>
          		</div>

          		<div className="input">
              	<label htmlFor="passwordConfirm">Confirme a senha 
									<span style={{opacity: errorInputs.confirmPassword}} className="errorInput">Você precisa confirmar a senha</span>
								</label>
              	<input type="password" name="passwordConfirm" value={confirmPassword} placeholder="Confirme sua senha" required
               	 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
              	/>
          		</div>

          		<button onClick={() => register(name, email, password, confirmPassword)}>Criar conta</button>
							
						</div>
        	</Form>
				</Items>
      </FormContainer>
  )
};

