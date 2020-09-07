import React, {Component}  from 'react';
import { Button,Form, TextArea } from 'semantic-ui-react'

class Encuesta extends Component {
    constructor(props){
        super(props);
        this.state = {
            alimentos: null,
            bebidas: null,
            servicio: null,
            ambiente: null,
            limpieza: null,
            gerente: null,
            experiencia: null,
            enterado: null,
            sugerencias: null
        }
    }

    handleChange = (e, { value },key) => {
        this.setState({[key]: value})
    }


    render(){
        console.log(this.state);
        const { alimentos, bebidas, servicio, ambiente, limpieza, gerente } = this.state;
        return(
            <div className='contentTest'>
                <h1 className='titleSection'>Tu opinión es muy importante <br/> para nosotros</h1>
                <h3 className='subtitle'>En Fiebre de Malta nos esforzamos por ser cada día mejores, por ello, agradecemos<br/>
                    mucho tus datos y comentarios.</h3>
                <div className='formTest'>
                    <Form>
                        <div className='dataCustomer'>
                            <Form.Field>
                              <label>Nombre</label>
                              <input/>
                            </Form.Field>
                            <Form.Field>
                              <label>Tel.</label>
                              <input />
                            </Form.Field>
                            <Form.Field>
                              <label>C.P.</label>
                              <input />
                            </Form.Field>
                            <Form.Field>
                              <label>Cumpleaños</label>
                              <input />
                            </Form.Field>
                            <Form.Field>
                              <label>e-mail</label>
                              <input />
                            </Form.Field>
                        </div>

                        <div className='testService'>
                            <div className='radios'>
                                <div className="values">
                                    <p class='notShow'>Excelente</p>
                                    <p class='notShow'>Bien</p>
                                    <p class='notShow'>Regular</p>
                                    <p class='notShow'>Mal</p>
                                    <p class='notShow'>Muy Mal</p>
                                </div>
                                <Form.Group inline >
                                    <label>Alimentos</label>
                                    <Form.Radio
                                    value='excelente'
                                    checked={alimentos === 'excelente'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'alimentos')}
                                    />
                                    <Form.Radio
                                    value='bien'
                                    checked={alimentos === 'bien'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'alimentos')}
                                    />
                                    <Form.Radio
                                    value='regular'
                                    checked={alimentos === 'regular'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'alimentos')}
                                    />
                                    <Form.Radio
                                    value='mal'
                                    checked={alimentos === 'mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'alimentos')}
                                    />
                                    <Form.Radio
                                    value='muy-mal'
                                    checked={alimentos === 'muy-mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'alimentos')}
                                    />
                                </Form.Group>
                                <Form.Group inline >
                                    <label>Bebidas</label>
                                    <Form.Radio
                                    value='excelente'
                                    checked={bebidas === 'excelente'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'bebidas')}
                                    />
                                    <Form.Radio
                                    value='bien'
                                    checked={bebidas === 'bien'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'bebidas')}
                                    />
                                    <Form.Radio
                                    value='regular'
                                    checked={bebidas === 'regular'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'bebidas')}
                                    />
                                    <Form.Radio
                                    value='mal'
                                    checked={bebidas === 'mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'bebidas')}
                                    />
                                    <Form.Radio
                                    value='muy-mal'
                                    checked={bebidas === 'muy-mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'bebidas')}
                                    />
                                </Form.Group>
                                <Form.Group inline >
                                    <label>Servicio</label>
                                    <Form.Radio
                                    value='excelente'
                                    checked={servicio === 'excelente'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'servicio')}
                                    />
                                    <Form.Radio
                                    value='bien'
                                    checked={servicio === 'bien'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'servicio')}
                                    />
                                    <Form.Radio
                                    value='regular'
                                    checked={servicio === 'regular'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'servicio')}
                                    />
                                    <Form.Radio
                                    value='mal'
                                    checked={servicio === 'mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'servicio')}
                                    />
                                    <Form.Radio
                                    value='muy-mal'
                                    checked={servicio === 'muy-mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'servicio')}
                                    />
                                </Form.Group>
                                <Form.Group inline >
                                    <label>Ambiente</label>
                                    <Form.Radio
                                    value='excelente'
                                    checked={ambiente === 'excelente'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'ambiente')}
                                    />
                                    <Form.Radio
                                    value='bien'
                                    checked={ambiente === 'bien'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'ambiente')}
                                    />
                                    <Form.Radio
                                    value='regular'
                                    checked={ambiente === 'regular'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'ambiente')}
                                    />
                                    <Form.Radio
                                    value='mal'
                                    checked={ambiente === 'mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'ambiente')}
                                    />
                                    <Form.Radio
                                    value='muy-mal'
                                    checked={ambiente === 'muy-mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'ambiente')}
                                    />
                                </Form.Group>
                                <Form.Group inline >
                                    <label>Limpieza</label>
                                    <Form.Radio
                                    value='excelente'
                                    checked={limpieza === 'excelente'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'limpieza')}
                                    />
                                    <Form.Radio
                                    value='bien'
                                    checked={limpieza === 'bien'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'limpieza')}
                                    />
                                    <Form.Radio
                                    value='regular'
                                    checked={limpieza === 'regular'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'limpieza')}
                                    />
                                    <Form.Radio
                                    value='mal'
                                    checked={limpieza === 'mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'limpieza')}
                                    />
                                    <Form.Radio
                                    value='muy-mal'
                                    checked={limpieza === 'muy-mal'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'limpieza')}
                                    />
                                </Form.Group>
                            </div>
                            <div className='askBoolean'>
                                <div className='ask'>
                                    <p>¿Se presentó el gerente o capitán en tu mesa?</p>
                                <Form.Group inline>
                                    <Form.Radio
                                    label='Si'
                                    value='si'
                                    checked={gerente === 'si'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'gerente')}
                                    />
                                    <Form.Radio
                                    label='No'
                                    value='no'
                                    checked={gerente === 'no'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'gerente')}
                                    />
                                </Form.Group>
                                </div>
                                <div className='ask'>
                                    <p>¿Tu experiencia fue lo que esperabas?</p>
                                <Form.Group inline>
                                    <Form.Radio
                                    label='Si'
                                    value='si'
                                    checked={gerente === 'si'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'experiencia')}
                                    />
                                    <Form.Radio
                                    label='No'
                                    value='no'
                                    checked={gerente === 'no'}
                                    onChange={(e,{value})=>this.handleChange(e,{value},'experiencia')}
                                    />
                                </Form.Group>
                                <div className='ask enteraste'>
                                    <p>¿Como te enteranste de nosotros?</p>
                                    <Form.Field>
                                        <input type="text" name="enterado"/>
                                    </Form.Field>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='suggest'>
                            <p className='white'>Sugerencias, comentarios y preguntas</p>
                            <TextArea />
                        </div>
                    </Form>
                    <Button type='submit'>Submit</Button>
                </div>
            </div>
        )
    }
}

export default Encuesta;
