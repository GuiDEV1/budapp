import { AuthContext } from "context/AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

//styled...
import { LoginContaier, Items, ItemImg, Form } from "./LoginStyle";

//images
import login_img from 'assets/img/login.svg';

//service 
import { ErrorService } from "components/Services/error/ErrorService";

export const Login = () =>{

    const navigate = useNavigate();
    const contextAuth = useContext(AuthContext);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
	const [LoginErro, setLoginErro] = useState<boolean>(false);
	const [errorInputs, setErrorInputs] = useState({
		email: 0,
		password: 0,
	});

    async function login(email: string, password: string) {
       if(email != '' && password != ''){
		const loginAuthenticate = await contextAuth.authenticate(email, password);
        if(loginAuthenticate.erro === true){
            return setLoginErro(true);
        }

        return navigate('/main');
			 }

			 if(email === ''){
				return setErrorInputs(prevState => ({...prevState,email: 1 }));
			 }

			 if(password === ''){
				return setErrorInputs(prevState => ({...prevState, password: 1}));
			 }

    };

		useEffect(() => {
			setErrorInputs(prevState => ({
				...prevState,
				email: 0,
				password: 0
			}));

		}, [email, password]);

		useEffect(() => {
			setTimeout(() => {
				setLoginErro(false);
			}, 8000)

		}, [LoginErro]); 

   
    return (
       <LoginContaier>
				{LoginErro && (
					<ErrorService errorText="Informações inválidas, verifique e tente novamente" />
				)}
				<Items>
					<ItemImg>
						<img src={login_img} />
					</ItemImg>
					
					<Form>
						<div className="login_text">
							<h2>Login</h2>
								<p>
									Ainda não possui cadastro ? 
									<span onClick={() => navigate('/register')}> Criar agora</span>
								</p>
						</div>

						<div className="formItems">
            	<div className="input">
                <label htmlFor="email">E-mail:
									<span style={{opacity: errorInputs.email}} className="errorInput">Você precisa informar o email</span>
								</label>
                <input type="text" name="email" value={email} placeholder="seuemail@exemplo.com"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
            	</div>

            	<div className="input">
                <label htmlFor="password">Senha:
									<span style={{opacity: errorInputs.password}} className="errorInput">Você precisa informar a senha</span>
								</label>
                <input type="password" name="password" value={password} placeholder="digite sua senha"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
								<p className="resetPassword">Esqueceu sua senha ?</p>
            	</div>
            	<button onClick={() => login(email, password)}>Acessa conta</button>
        	</div>

					</Form>
				</Items>
       </LoginContaier>
    )
};

