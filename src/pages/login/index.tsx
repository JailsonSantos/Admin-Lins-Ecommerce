import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { login } from '../../redux/apiCalls';

import ReactLoading from 'react-loading';

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Error,
  Link,
} from '../../styles/loginStyles';

import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';


export default function Login() {

  const router = useRouter();
  const cookies = parseCookies();
  const { ADMIN } = cookies;

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { currentUser, isFetching, error } = useSelector((state: RootState) => state.user);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username !== '' && password !== '') {
      await login(dispatch, { username, password });
    }
  }

  useEffect(() => {
    if (ADMIN && currentUser._id) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [currentUser._id, ADMIN]);

  return (
    <>
      {!loading &&
        <Container>
          <Wrapper>
            <Title>LOGIN</Title>
            <Form className="form" onSubmit={(event) => handleLogin(event)}>
              <Input type="text" placeholder="Username" onChange={(event) => setUserName(event.target.value)} />
              <Input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />

              <Button type="submit">
                {isFetching ? <ReactLoading type="spokes" height="16px" width="16px" color="#fff" /> : 'LOGIN'}
              </Button>

              {error && <Error>Username ou Senha Inválidos!</Error>}

              <Link>Esqueceu sua senha?</Link>
              <Link>Crie uma nova conta</Link>
            </Form>
          </Wrapper>
        </Container >
      }
    </>
  );
}