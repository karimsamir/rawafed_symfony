<?php

namespace RawafedGroup\RawafedBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use RawafedGroup\RawafedBundle\Entity\Enquiry;
use RawafedGroup\RawafedBundle\Form\EnquiryType;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends Controller {

    public function indexAction() {

        return $this->render('RawafedBundle:Index:index.html.twig');
    }

    public function productsAction() {

        if ($this->getRequest()->isXmlHttpRequest()) {
//            die("donbe");
            return $this->render('RawafedBundle:Index:products.ajax.twig');
        }

        return $this->render('RawafedBundle:Index:products.html.twig');
    }

    public function partnersAction() {

        if ($this->getRequest()->isXmlHttpRequest()) {
//            die("donbe");
            return $this->render('RawafedBundle:Index:partners.ajax.twig');
        }

        return $this->render('RawafedBundle:Index:partners.html.twig');
    }

    public function clientsAction() {

        if ($this->getRequest()->isXmlHttpRequest()) {
//            die("donbe");
            return $this->render('RawafedBundle:Index:clients.ajax.twig');
        }

        return $this->render('RawafedBundle:Index:clients.html.twig');
    }

    public function contactusAction() {
        $request = $this->getRequest();
//        die(var_dump($request->isXmlHttpRequest()));
        $enquiry = new Enquiry();
        $form = $this->createForm(new EnquiryType(), $enquiry);


        if ($request->getMethod() == 'POST') {
            $form->bindRequest($request);

//            if ($form->isValid()) {
//                // Perform some action, such as sending an email
//                // Redirect - This is important to prevent users re-posting
//                // the form if they refresh the page
//                return $this->redirect($this->generateUrl('RawafedBundle_contactus'));
//            }

            if ($form->isValid()) {
//                die(var_dump("form is valid"));
                $message = \Swift_Message::newInstance()
                        ->setSubject('Contact us from Rawafed')
                        ->setFrom('hr@rawafed-group.com')
//                        ->setSender($enquiry->getEmail(),$enquiry->getName())
                        ->setTo($this->container->getParameter('rawafed.emails.contact_email'))
                        ->setBody($this->renderView('RawafedBundle:Index:contactusEmail.txt.twig', array('enquiry' => $enquiry)));
                $this->get('mailer')->send($message);
//                die(var_dump($this->get('mailer')->send($message)));

                $this->get('session')->setFlash('rawafed-notice', 'Your contact was successfully sent. Thank you!');

                if ($request->isXmlHttpRequest()) {
//                    $response = new Response(json_encode(array(
//                                        'success' => 1
//                                        ,'view'=>$this->render('RawafedBundle:Index:contactus.ajax.twig', array(
//                                'form' => $form->createView()
//                            ))
//                                        , 'message' => "Your contact was successfully sent. Thank you!"
//                                    )));
//                    $response->headers->set('Content-Type', 'application/json');
//                    return $response;
                    return $this->render('RawafedBundle:Index:contactus.ajax.twig', array(
                                'form' => $form->createView()
                            ));
                } else {
                    // Redirect - This is important to prevent users re-posting
                    // the form if they refresh the page
                    return $this->redirect($this->generateUrl('RawafedBundle_contactus'));
                }
            } else {
                // if form is not valid
                $this->get('session')->setFlash('rawafed-notice', 'Sorry Your contact was not sent!');


//                die(var_dump(get_class_methods($s), $s));

                if ($request->isXmlHttpRequest()) {
//                    $response = new Response(json_encode(array(
//                                        'success' => 0
////                         ,'view'=>$s->send()
//                                        , 'message' => "Sorry your contact could not been sent successfully!"
//                                    )));
//                    $response->headers->set('Content-Type', 'application/json');
//                    return $response;
                    return $this->render('RawafedBundle:Index:contactus.ajax.twig', array(
                                'form' => $form->createView()
                            ));
                } else {
                    // Redirect - This is important to prevent users re-posting
                    // the form if they refresh the page
                    return $this->render('RawafedBundle:Index:contactus.html.twig', array(
                                'form' => $form->createView()
                            ));
                }
            }
        }
//else{
//     return $this->render('RawafedBundle:Index:contactus.html.twig', array(
//                    'form' => $form->createView()
//                ));
//}
//
        if ($this->getRequest()->isXmlHttpRequest()) {
//            die("donbe");
            return $this->render('RawafedBundle:Index:contactus.ajax.twig', array(
                        'form' => $form->createView()
                    ));
        } else {

            return $this->render('RawafedBundle:Index:contactus.html.twig', array(
                        'form' => $form->createView()
                    ));
        }



//    return $this->render('RawafedBundle:Index:contactus.html.twig');
    }

    public function servicesAction() {

        if ($this->getRequest()->isXmlHttpRequest()) {
//            die("donbe");
            return $this->render('RawafedBundle:Index:services.ajax.twig');
        }

        return $this->render('RawafedBundle:Index:services.html.twig');
    }

    public function technicalAction() {

        if ($this->getRequest()->isXmlHttpRequest()) {
//            die("donbe");
            return $this->render('RawafedBundle:Index:technical.ajax.twig');
        }

        return $this->render('RawafedBundle:Index:technical.html.twig');
    }

}
